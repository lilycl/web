<div :class  = "['comp-container', className]"
     :style  = "{background: bgcolor}"
     @scroll = "scroll">

    <slot></slot>
</div>