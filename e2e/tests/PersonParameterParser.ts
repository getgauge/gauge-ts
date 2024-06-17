import { Person } from "@lib/Person";
import type { Parameter, ParameterParser } from "gauge-ts";
export default class PersonParameterParser implements ParameterParser {
  public canParse(parameter: Parameter): boolean {
    return (
      parameter.getValue().startsWith("{") && parameter.getValue().endsWith("}")
    );
  }

  public parse(parameter: Parameter): Person {
    const person = JSON.parse(parameter.getValue());
    return new Person(person.name, person.age);
  }
}
