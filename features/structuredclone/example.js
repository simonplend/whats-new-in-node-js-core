/**
 * Deep cloning an object with `structuredClone()` in Node.js.
 *
 * Added: v17.0.0
 * Also available in Deno, Firefox, Chrome, Edge and Safari
 */

const user = {
	name: "Lachlan Morris",
	address: { street: "Original Road", city: "Placeshire" },
};

const clonedUser = structuredClone(user);

clonedUser.address.street = "New Road";

console.log("user.address.street:", user.address.street);
// > Original Road

console.log("clonedUser.address.street:", clonedUser.address.street);
// > New Road
