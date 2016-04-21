'use strict';"use strict";
function normalizeValidator(validator) {
    if (validator.validate !== undefined) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}
exports.normalizeValidator = normalizeValidator;
function normalizeAsyncValidator(validator) {
    if (validator.validate !== undefined) {
        return function (c) { return Promise.resolve(validator.validate(c)); };
    }
    else {
        return validator;
    }
}
exports.normalizeAsyncValidator = normalizeAsyncValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplX3ZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtVnJWYXY4UUwudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZGlyZWN0aXZlcy9ub3JtYWxpemVfdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSw0QkFBbUMsU0FBa0M7SUFDbkUsRUFBRSxDQUFDLENBQWEsU0FBVSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxVQUFDLENBQWtCLElBQUssT0FBWSxTQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDO0lBQ3BFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBYyxTQUFTLENBQUM7SUFDaEMsQ0FBQztBQUNILENBQUM7QUFOZSwwQkFBa0IscUJBTWpDLENBQUE7QUFFRCxpQ0FBd0MsU0FBdUM7SUFDN0UsRUFBRSxDQUFDLENBQWEsU0FBVSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxVQUFDLENBQWtCLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFhLFNBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQztJQUNyRixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQW1CLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0FBQ0gsQ0FBQztBQU5lLCtCQUF1QiwwQkFNdEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tIFwiLi4vbW9kZWxcIjtcbmltcG9ydCB7VmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQXN5bmNWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbGlkYXRvcih2YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yKTogVmFsaWRhdG9yRm4ge1xuICBpZiAoKDxWYWxpZGF0b3I+dmFsaWRhdG9yKS52YWxpZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIChjOiBBYnN0cmFjdENvbnRyb2wpID0+ICg8VmFsaWRhdG9yPnZhbGlkYXRvcikudmFsaWRhdGUoYyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxWYWxpZGF0b3JGbj52YWxpZGF0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yKHZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiB8IFZhbGlkYXRvcik6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICBpZiAoKDxWYWxpZGF0b3I+dmFsaWRhdG9yKS52YWxpZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIChjOiBBYnN0cmFjdENvbnRyb2wpID0+IFByb21pc2UucmVzb2x2ZSgoPFZhbGlkYXRvcj52YWxpZGF0b3IpLnZhbGlkYXRlKGMpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPEFzeW5jVmFsaWRhdG9yRm4+dmFsaWRhdG9yO1xuICB9XG59XG4iXX0=