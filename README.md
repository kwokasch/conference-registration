![Conference registration](conference-registration.png)

## Setup

* Requires node and Docker / Docker Compose
* Run `npm start`. You can access your running client on `http://localhost:8090` and the API for this app at `http://localhost:8091`.

## Instructions

Refactor the HTML and CSS in `frontend/App.vue` to use components and dynamically filter data based on search criteria.

* Your solution should have at least 5 components
* All fields are required except the mailing list
* You should implement validations for all fields
* Any submission error messages should be displayed below the form
* Any submission confirmation messages should be displayed in place of the form


## Data

You'll need to submit your form as a `POST` request to `http://localhost:8091/registration`. The content-type header should be set to `application/json`, The body should be a JSON-encoded object that looks like this:

```json
{
  "registration": {
    "firstName":"Kyle",
    "lastName": "Coberly",
    "email": "kyle@sikaeducation.com",
    "birthday": "2020-02-18",
    "shirtSize": "xl",
    "attendeeType": "attending",
    "mailingList": "yes"
  }
}
```

If the registration is successful, it will return a `201` response in this format:

```json
{
  "message": "Success! You are Kyle Coberly, your email address is kyle@sikaeducation.com, your shirt size is xl, and your birthday is 2020-02-18. Your attendee type is attending, and you do want to be added to our mailing list."
}
```

If the registration is not successful, it will return a `400` response in this format:

```json
{
  "error": "Uh oh, it didn't work. I think your name is , your email address is , your shirt size is , and your birthday is . I think your attendee type is , and your mailing list choice is "
}
```

Here are the shirt sizes this app should support:

```js
const shirtSizes = [{
  value: 's',
  label: 'Small',
}, {
  value: 'm',
  label: 'Small',
}, {
  value: 'l',
  label: 'Large',
}, {
  value: 'xl',
  label: 'XL',
}, {
  value: 'xxl',
  label: 'XXL',
}, {
  value: 'xxxl',
  label: 'XXXL',
}, {
  value: 'xxxxl',
  label: 'XXXXL',
}, {
  value: 'xxxxxl',
  label: 'XXXXXL',
}];
```
