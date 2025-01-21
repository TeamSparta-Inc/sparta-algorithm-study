type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    if (!obj) {
        return true;
    }
    if (Array.isArray(obj) && obj.length === 0) {
        return true;
    }
    if (typeof obj === "object" && Object.keys(obj).length === 0){
        return true;
    }
    return false;
};