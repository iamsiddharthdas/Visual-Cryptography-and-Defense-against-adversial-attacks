import React, { Component } from 'react';
import 'typeface-roboto';
import {RaisedButton, Divider, Paper} from 'material-ui';
import ReactCrop, {makeAspectCrop} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import '../code.css';

export class IntroExplanation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: null,
      crop: null
    };
  }

  onImageLoaded = image => {
    this.setState({
      crop: makeAspectCrop({
        x: 25,
        y: 25,
        aspect: 1 / 1,
        width: 227,
      },
      image.width / image.height),
      image: image,
    });
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          this.setState({
            src: reader.result,
          });

          let parent = this;
          let image = new Image();
          image.src = reader.result;
          image.onload = function() {
            // cache raw image size here
            parent.setState({
              origWidth: image.width,
              origHeight: image.height
            });
          };
        },
        false
      )
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  onCropChange = crop => {
    this.setState({ crop });
  }

  onCropClicked = () => {
    this.getCroppedImg(this.state.image, this.state.crop);
  }

  getCroppedImg(image, pixelCrop) {
    // Print crops to canvas
    const canvas = document.createElement('canvas');
    canvas.width = this.state.origWidth;
    canvas.height = this.state.origHeight;
    const ctx = canvas.getContext('2d');

    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) API:
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    ctx.drawImage(
      image,
      (pixelCrop.x/100)*this.state.origWidth,
      (pixelCrop.y/100)*this.state.origHeight,
      (pixelCrop.width/100)*this.state.origWidth,
      (pixelCrop.height/100)*this.state.origHeight,
      0,
      0,
      227,
      227
    );

    // As Base64 string
    const base64Image = canvas.toDataURL('image/jpeg');
    this.props.setCroppedImage(base64Image);
  }

  render() {
    return (
      <div>
      <div className="Explanation-center">
        <h2>How can we detect an adversarial example?</h2>
        <p>
          When you see a corrupted image of, let's say, a panda - you recognize it. Probably by the colorful noise. But for the machine it's not a noisy photo of a panda, it's a chihuahua. And it's so sure about it, that it doesn't make sense to question its own decisions. <br /><br />Our project lets you explore adversarial attacks by animating the classification scores and CAM heatmap visualization as you tune the strength of perturbation applied in real-time. Try changing the epsilon value via the slider below!
        </p>
      </div>

      <Divider />
      <div style={{backgroundColor: 'hsl(0, 0%, 99%)'}}>
        <br />
        <div id="StickyPicker" style={{gridColumn: 'screen', margin:'auto'}}>
          <div svelte-1277576141 class="root">
            <div class="sticky base-grid" style={{margin: 'auto', maxWidth: '640px'}}>
              <div class="container" style={{margin: 'auto'}}>


                  <h4 style={{display: "inline"}}>Upload your input image </h4>
                  <input style={{marginTop: "0px", marginBottom: "0px", display: "inline"}} onChange={this.onSelectFile} type="file" id="files" name="files[]" multiple/>

                  {this.state.src && (
                  <div>
                    <ReactCrop
                      src={this.state.src}
                      crop={this.state.crop}
                      onImageLoaded={this.onImageLoaded}
                      onChange={this.onCropChange}
                      style={{marginTop: "6px", marginBottom: "4px", maxHeight: "150px"}}
                    />
                    <br />
                    <RaisedButton
                      label="Crop"
                      secondary={true}
                      onClick={this.onCropClicked}
                    />
                    <br />
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
        <br />
        </div>

      <Divider />
      <div className="Explanation-center">
        <p> Our aim is to bring adversarial example generation and dynamic visualization to the browser for real-time exploration </p>
      </div>
      </div>
    );
  }
}

export class CAMExplanation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{fontFamily: "Roboto"}}>

      </div>
    );
  }
}

export class DeepDreamExplanation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{fontFamily: "Roboto"}}>
        <p style={{color:'gray', textAlign:'right'}}><em> © Developed by Yadhu Anand, Siddharth Das and Harida PK</em></p>
        <br /><br /><br />
      </div>
    )
  }
}
