/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as r}from"./chunks/tslib.es6.js";import s from"./Basemap.js";import t from"./Ground.js";import e from"./core/Accessor.js";import{C as o}from"./chunks/CollectionFlattener.js";import{E as i}from"./chunks/Evented.js";import{b as a}from"./core/lang.js";import{property as l}from"./core/accessorSupport/decorators/property.js";import{cast as n}from"./core/accessorSupport/decorators/cast.js";import{subclass as p}from"./core/accessorSupport/decorators/subclass.js";import{c as m,d as c,e as u}from"./chunks/basemapUtils.js";import{L as d}from"./chunks/Logger.js";import{e as j}from"./chunks/ensureType.js";import{T as h,L as y}from"./chunks/TablesMixin.js";import"./core/Collection.js";import"./chunks/ArrayPool.js";import"./core/scheduling.js";import"./chunks/nextTick.js";import"./core/promiseUtils.js";import"./core/Error.js";import"./chunks/object.js";import"./config.js";import"./chunks/string.js";import"./chunks/shared.js";import"./chunks/handleUtils.js";import"./chunks/metadata.js";import"./chunks/deprecate.js";import"./chunks/collectionUtils.js";import"./chunks/JSONSupport.js";import"./chunks/Loadable.js";import"./chunks/Promise.js";import"./chunks/loadAll.js";import"./chunks/asyncUtils.js";import"./core/urlUtils.js";import"./chunks/writer.js";import"./geometry/SpatialReference.js";import"./portal/Portal.js";import"./kernel.js";import"./request.js";import"./chunks/reader.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/Point.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/Ellipsoid.js";import"./chunks/locale.js";import"./portal/PortalQueryParams.js";import"./chunks/jsonMap.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalGroup.js";import"./portal/PortalItem.js";import"./chunks/assets.js";import"./portal/PortalItemResource.js";import"./portal/PortalRating.js";import"./chunks/messages.js";import"./chunks/writeUtils.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./chunks/common.js";import"./chunks/compilerUtils.js";import"./chunks/enumeration.js";import"./chunks/opacityUtils.js";import"./core/HandleOwner.js";import"./core/Handles.js";import"./chunks/reactiveUtils.js";import"./core/watchUtils.js";import"./layers/Layer.js";import"./geometry.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/extentUtils.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./chunks/Identifiable.js";function g(r){var s;return!!(r&&r.loaded&&"capabilities"in r&&null!=r&&null!=(s=r.capabilities)&&s.operations&&"supportsEditing"in r.capabilities.operations&&!0===r.capabilities.operations.supportsEditing)&&!("editingEnabled"in r&&!r.editingEnabled)}const b=d.getLogger("esri.support.groundUtils"),k={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};let f=class extends(h(y(i.EventedMixin(e)))){constructor(r){super(r),this.allLayers=new o({getCollections:()=>{var r,s,t;return[null==(r=this.basemap)?void 0:r.baseLayers,null==(s=this.ground)?void 0:s.layers,this.layers,null==(t=this.basemap)?void 0:t.referenceLayers]},getChildrenFunction:r=>"layers"in r?r.layers:null}),this.allTables=new o({getCollections:()=>[this.tables,this.layers],getChildrenFunction:r=>{const s=[];return"tables"in r&&s.push(r.tables),"layers"in r&&s.push(r.layers),s},itemFilterFunction:r=>{const s=r.parent;return s&&"tables"in s&&s.tables.includes(r)}}),this.basemap=null,this.editableLayers=new o({getCollections:()=>[this.allLayers],itemFilterFunction:g}),this.ground=new t,this._basemapCache=m()}destroy(){var r,s;this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),null==(r=this.ground)||r.destroy(),null==(s=this.basemap)||s.destroy(),c(this._basemapCache),this._basemapCache=null}castBasemap(r){return u(r,this._basemapCache)}castGround(r){const s=function(r){let s=null;"string"==typeof r?r in k?s=new t({resourceInfo:{data:{layers:[k[r]]}}}):b.warn(`Unable to find ground definition for: ${r}. Try "world-elevation"`):s=j(t,r);return s}(r);return a(s)?this._get("ground"):s}findLayerById(r){return this.allLayers.find((s=>s.id===r))}findTableById(r){return this.allTables.find((s=>s.id===r))}};r([l({readOnly:!0,dependsOn:[]})],f.prototype,"allLayers",void 0),r([l({readOnly:!0})],f.prototype,"allTables",void 0),r([l({type:s})],f.prototype,"basemap",void 0),r([n("basemap")],f.prototype,"castBasemap",null),r([l({readOnly:!0})],f.prototype,"editableLayers",void 0),r([l({type:t,nonNullable:!0})],f.prototype,"ground",void 0),r([n("ground")],f.prototype,"castGround",null),f=r([p("esri.Map")],f);const v=f;export{v as default};