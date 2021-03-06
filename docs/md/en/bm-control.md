# Custom Control

`BmControl`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a custom control on the map

#### Code

```html
<template>
  <baidu-map class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}">
    <bm-control>
      <button @click="addZoom(19)">Zoom Max</button>
      <button @click="addZoom(10)">Reset</button>
      <button @click="addZoom(3)">Zoom Min</button>
    </bm-control>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      zoom: 10
    }
  },
  methods: {
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>
```

#### Preview 

<doc-preview>
  <baidu-map class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}">
    <bm-control>
      <md-button class="md-raised" @click="addZoom(19)">Zoom Max</md-button>
      <md-button class="md-raised" @click="addZoom(10)">Reset</md-button>
      <md-button class="md-raised" @click="addZoom(3)">Zoom Min</md-button>
    </bm-control>
  </baidu-map>
</doc-preview>

### Use third party libraries

#### 代码

```html
<template>
  <baidu-map class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}" @ready="setDistanceToolInstance">
    <bm-control>
      <button @click="openDistanceTool">Open Instance Tool</button>
    </bm-control>
  </baidu-map>
</template>

<script>
import DistanceTool from 'bmaplib.distancetool'

export default {
  methods: {
    setDistanceToolInstance ({map}) {
      this.distanceTool = new DistanceTool(map, {lineStroke : 2})
    },
    openDistanceTool (e) {
      const {distanceTool} = this
      distanceTool && distanceTool.open()
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}" @ready="setDistanceToolInstance">
    <bm-control>
      <md-button class="md-raised md-primary" @click="openDistanceTool">
        Open Instance Tool
      </md-button>
    </bm-control>
  </baidu-map>
</doc-preview>

<script>
import DistanceTool from 'bmaplib.distancetool'

export default {
  data () {
    return {
      zoom: 10
    }
  },
  methods: {
    setDistanceToolInstance ({map}) {
      this.distanceTool = new DistanceTool(map, {lineStroke : 2})
    },
    openDistanceTool (e) {
      const {distanceTool} = this
      distanceTool && distanceTool.open()
    },
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>