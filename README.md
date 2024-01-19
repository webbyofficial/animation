# webbydevs/animation

A lightweight and easy-to-use NPM package that enables React developers to add basic on-scroll animations with typescript support to their web applications. With just a single component, you can bring life to your UI by implementing engaging floating animations.

https://www.npmjs.com/package/@webbydevs/animation

## Installation

Install `@webbydevs/animation` using NPM:

```bash
npm install @webbydevs/animation
```

## Documentation

The package contains only one component which is easy to use.
You can import it like this:

```javascript
import { Animation } from "@webbydevs/animation";
```

The component takes two arguments, `direction` and `delay`.

- `direction` is required for the component to function properly. This property regulates the direction from which the animation will float in. It accepts the following values: "top", "right", "bottom", "left".

* `delay` property is optional and, when included, requires a number representing the duration, in milliseconds, by which the component is delayed. Using this property correctly, you achive some very cool wave like effects.

## Example usage

```javascript
<Animation direction={"left"} delay={200}>
  {/* You component goes herer */}
</Animation>
```

## Thank you

Thank you for choosing the `@webbydevs/animation` library to enhance your React applications! We're excited to be a part of your creative journey and we hope it adds a touch of magic to your user interface. Thanks again for being a part of our community. Happy coding!

Also, check out our organization at https://webbydevs.com
