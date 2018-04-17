# Bulma Modal FX

A set of modal window effects with CSS transitions and animations for Bulma. Very inspired by this Codrops resource/article https://github.com/codrops/ModalWindowEffects

Demo: https://postare.github.io/bulma-modal-fx
Bulma docs: https://bulma.io/documentation

## Effects
class `modal-fx-` + effect 
example: `modal-fx-newsPaper`  
 - normal 
 - fadeInScale 
 - slideRight
 - slideLeft 
 - slideTop 
 - slideBottom
 - fall
 - slideFall 
 - newsPaper 
 - 3dFlipVertical 
 - 3dFlipHorizontal 
 - 3dSign 
 - 3dSignDown 
 - superScaled
 - 3dSlit 
 - 3dRotateFromBottom 
 - 3dRotateFromLeft

### Examples
https://postare.github.io/bulma-modal-fx/

## INSTALL
`npm i bulma-modal-fx`

or simply download latest release: https://github.com/postare/bulma-modal-fx/releases/

## GETTING STARTED
Include the plugin css file:

```html
<link  rel="stylesheet" href="dist/css/modal-fx.min.css" />
```
 
(optional) Include the plugin just before body closing tag:
```html
<script type="text/javascript" src="dist/js/modal-fx.min.js"></script>
```

**Or use a CDN**

```html
<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
```

```html
<script type="text/javascript" src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
```

### HTML MARKUP

```html
<!-- trigger button -->
<span class="button modal-button" data-target="modal-id">Open modal</span> 

<!-- related modal with fx class "modal-fx-fadeInScale" --> 
<div id="modal-id" class="modal modal-fx-fadeInScale">  
	<div class="modal-background"></div>  
	<div class="modal-content">  
	<!-- Any other Bulma elements you want -->  
	</div>  
	<button class="modal-close is-large" aria-label="close"></button>  
</div> 

<!-- To activate the modal, just add the is-active modifier on the .modal container -->
<div id="modal-id" class="modal modal-fx-fadeInScale is-active"></div>[...]
```

[Bulma documentation on modal](https://bulma.io/documentation/components/modal/)

### MODIFIERS

Class modifiers for `.modal`:

-   `.modal-pos-top`: modal positioned on top
-   `.modal-pos-bottom`: modal positioned on bottom

Class modifiers for `.modal-content`:

-   `.is-huge`: 100% width modal
-   `.is-tiny`: 400px width modal
-   `.is-image`: if the content is an image


### SASS VARIABLES

```scss
// Modal minimal setup
$transition-duration: .3s;
$transition-duration-newsPaper: .7s;
$transition-duration-3dslit: .5s;
$modal-perspective: 1300px;
$modal-bg-color: rgba($black,.86);
```
