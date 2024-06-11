Param(
    [String]$TaskName # The name of the task to run
)

# Define the tasks
$tasks = @{}

$tasks.Add('build', @{
        description = "Compiles typescript files to js with diclaration, add generated code to dist";
        script      = {
            clean
            npm run build
            Copy-Item -Recurse .\src\gen .\dist
        }
    })


$tasks.Add('package', @{
        description = "Generate gauge-ts plugin zip file";
        script      = {
            Invoke-Command $tasks.Get_Item("build").script
            npm run clean:build
            mkdir -p deploy
            Copy-Item launcher.* deploy
            Copy-Item ts.json deploy
            mkdir artifacts
            $version = version
            $src = Join-Path -Path (Get-Location).Path -ChildPath "deploy"
            $artifacts = Join-Path -Path  (Get-Location).Path -ChildPath "artifacts"
            $dest = Join-Path -Path $artifacts -ChildPath "gauge-ts-$version.zip"
            Add-Type -Assembly "System.IO.Compression.FileSystem" ;
            [System.IO.Compression.ZipFile]::CreateFromDirectory($src, $dest)
        }
    })


$tasks.Add('install', @{
        description = "Install's gauge-ts plugin from the files in artifacts dir";
        script      = {
            Invoke-Command $tasks.Get_Item("package").script
            $version = version
            gauge install ts -f ".\artifacts\gauge-ts-$version.zip"
        }
    })


$tasks.Add('uninstall', @{
        description = "UnInstall gauge-ts plugin's current version";
        script      = {
            $version = version
            gauge uninstall ts -v $version
        }
    })



$tasks.Add('forceinstall', @{
        description = "Insatall gauge-ts plugin after uninstall the current version";
        script      = {
            Invoke-Command $tasks.Get_Item("uninstall").script
            Invoke-Command $tasks.Get_Item("install").script
        }
    })


# Helper functions
function version {
    $runnerManifest = Get-Content .\ts.json | Out-String | ConvertFrom-Json
    $version = $runnerManifest.version
    return $version
}

function clean {
    $dirs = "dist", "deploy", "artifacts"
    foreach ($dir in $dirs) {
        if (Test-Path $dir) {
            Remove-Item -Recurse -Force $dir
        }
    }
}

# Some helpful strings for formatting output
$indent = (" " * 4);
$spacer = ("-" * 40);

function DisplayHelpText {
    $help_text = Get-Help $MyInvocation.ScriptName
    $syn = $help_text.Synopsis
    Write-Output "build.ps1 - runtask TaskName"
    DisplayTaskList
}

function DisplayTaskList {
    Write-Output "`nList of Tasks:`n$spacer"
    foreach ($task in $tasks.GetEnumerator()) {
        Write-Output "$indent$($task.Key)"
        Write-Output "$($indent * 2)$($task.Value.description)"
    }
}

# Now process the given task name
if (-not $taskname) {
    DisplayHelpText
    exit
}
$task = $tasks.Get_Item($taskname)
if ($task) {
    Invoke-Command $task.script
}
else {
    Write-Output "'$taskname' is not a valid task name."
    DisplayTaskList
}
