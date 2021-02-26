export class AttributeConverter {
    static convertValueBasedOnAttributeName(value: any, attrName: any): any;
    static convertValueBasedOnContentType(value: any, contentType: any): any;
    static convertMultiValue(value: any): MultiValue;
}
import MultiValue = require("../data_type/multi.value");
