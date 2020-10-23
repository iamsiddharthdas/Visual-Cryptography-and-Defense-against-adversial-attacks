This project deals with an interactive webtool that lets anyone to explore adversarial attacks by dynamically updating the classification scores and Class Activation Map (CAM) heatmap visualization of an input image as one tunes the strength of perturbation (epsilon in Fast Gradient Sign Method) applied to generate the adversarial example, all rendered in real-time. Our image classification architecture uses MobileNetV1 as backbone and gradient calculations for depthwise convolution with respect to the input image. You can now upload your own images and animate the CAM differential with different epsilon multipliers on-demand.

The JavaScript webtool is built with a TensorFlow.js backend and a React frontend referencing open source components.

## How to run the program?

Download or clone this repository:


```bash
git clone https://github.com/iamsiddharthdas/Visual-Cryptography-Defense-against-adversial-attacks.git
```

`cd` into the cloned repo and install the required depedencies:

```bash
yarn

```

To run, type:

```bash
yarn start

```


## To Do

- [ ] Input slider to choose from 1000 classes for targeted adversarial attack 
- [ ] Port Robust Adversrial Example from IPython notebook
- [ ] Adversarial Training with FGSM
- [ ] Visualize perturbations in real time? i.e. scale the negative values so we have 0 in the middle of the RGB values
- [ ] Explore Saliency Detection implementation (JS) methods

