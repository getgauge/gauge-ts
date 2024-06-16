import { Person } from "@lib/Person";
import type { Parameter, ParameterParser } from "gauge-ts";
export default class PersonParameterParser implements ParameterParser {
  public canParse(paramter: Parameter): boolean {
    return (
      paramter.getValue().startsWith("{") && paramter.getValue().endsWith("}")
    );
  }

  public parse(parameter: Parameter): Person {
    const person = JSON.parse(parameter.getValue());
    return new Person(person.name, person.age);
  }
}
