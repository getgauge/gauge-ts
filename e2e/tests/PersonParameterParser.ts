import { Person } from "@lib/Person";
import type { Parameter, ParameterParser } from "gauge-ts";
export default class PersonParameterParser implements ParameterParser {
  public canParse(parameter: Parameter): boolean {
    return parameter.value.startsWith("{") && parameter.value.endsWith("}");
  }

  public parse(parameter: Parameter): Person {
    const person = JSON.parse(parameter.value);
    return new Person(person.name, person.age);
  }
}
