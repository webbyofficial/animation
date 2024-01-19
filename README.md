# @webbydevs/animation

### Description

A lightweight and easy-to-use NPM package that enables React developers to add basic on-scroll animations with typescript support to their web applications. With just a single component, you can bring life to your UI by implementing engaging floating animations.

### Installation

Install `@webbydevs/animation` using NPM:

```
npm install @webbydevs/animation
```

### Documentation

The package contains only once component which is easy to use.
You can import it like this:

```
import { Animation } from "@webbydevs/animation";
```

The component takes two arguments, `direction` and `delay`.

- `direction` is required for the component to function properly. This property regulates the direction from which the animation will float in. It accepts the following values: "top", "right", "bottom", "left".

* `delay` property is optional and, when included, requires a number representing the duration, in milliseconds, by which the component is delayed. Using this property correctly, you achive some very cool wave like effects.

## Example usage

```
<Animation direction={"left"} delay={200}>
    {/* You component goes herer */}
</Animation>
```
