<script setup lang="ts">
/* =======================
 * Page Metadata
 * ======================= */

/* =======================
 * Components & Utilities
 * ======================= */

import {
  TreeViewComponent as EjsTreeview,
  ContextMenuComponent as EjsContextmenu,
} from "@syncfusion/ej2-vue-navigations";
import * as dataSource from "./data.json";

/* =======================
 * GraphQL
 * ======================= */

/* =======================
 * Interfaces
 * ======================= */
interface TreeNode {
  id: number | string;
  name: string;
  icon?: string;
  subChild?: TreeNode[];
}

/* =======================
 * Props & Emits
 * ======================= */

/* =======================
 * Provides
 * ======================= */

/* =======================
 * Refs & Reactive State
 * ======================= */
const contextMenu = ref<InstanceType<typeof EjsContextmenu> | null>(null);
const treeview = ref<InstanceType<typeof EjsTreeview> | null>(null);

const fields = ref({
  dataSource: dataSource.defaultData  as TreeNode[],
  id: "id",
  text: "name",
  child: "subChild",
});

const menuItems = [
  { text: "Add New Item" },
  { text: "Rename Item" },
  { text: "Remove Item" },
];

let index = 1;

/* =======================
 * Form State
 * ======================= */

/* =======================
 * GraphQL Mutations
 * ======================= */

/* =======================
 * Methods
 * ======================= */

 const menuclick = (args: any) => {
  if (!treeview.value) return;
  var treevalidate = treeview.value.ej2Instances;
  var targetNodeId = treevalidate.selectedNodes[0];
  if (args.item.text == "Add New Item") {
    var nodeId = "tree_" + index;
    var item = { id: nodeId, name: "New Folder" };
    treevalidate.addNodes([item], targetNodeId, null);
    index++;
    treevalidate.fields.dataSource.push(item);
    treevalidate.beginEdit(nodeId);
  } else if (args.item.text == "Remove Item") {
    treevalidate.removeNodes([targetNodeId]);
  } else if (args.item.text == "Rename Item") {
    treevalidate.beginEdit(targetNodeId);
  }
};
const beforeopen = (args: any) => {
  var targetNode = args.event.target;
  if (!contextMenu.value) return;
  var contextmenutree = contextMenu.value.ej2Instances;
  if (targetNode.classList.contains("remove")) {
    contextmenutree.enableItems(["Remove Item"], false);
  } else {
    contextmenutree.enableItems(["Remove Item"], true);
  }
  if (targetNode.classList.contains("rename")) {
    contextmenutree.enableItems(["Rename Item"], false);
  } else {
    contextmenutree.enableItems(["Rename Item"], true);
  }
};

const nodeclicked = (args: any) => {
  if (args.event.which === 3) {
    var treeObj = treeview.value.ej2Instances;
    treeObj.selectedNodes = [args.node.getAttribute("data-uid")];
  }
};
const addMainCategory = () => {
  if (!treeview.value) return;
  const treeInstance = treeview.value.ej2Instances;
  const nodeId = index;
  const newItem = {
    name: "New Category",
  };
  index++;
  treeInstance.beginEdit(nodeId); 
};
/* =======================
 * Watchers
 * ======================= */

/* =======================
 * Computed Properties
 * ======================= */

/* =======================
 * Exposes
 * ======================= */
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Course Categories">
        <VCardText>
          <VBtn color="primary" size="small" @click="addMainCategory"
            >Add New Category</VBtn
          >
          <ejs-treeview
            ref="treeview"
            enablePersistence="true"
            enable
            id="treeview"
            :fields="fields"
            :allowDragAndDrop="true"
            :nodeClicked="nodeclicked"
          >
            <ejs-contextmenu
              id="contextmenutree"
              ref="contextMenu"
              target="#treeview"
              :items="menuItems"
              :beforeOpen="beforeopen"
              :select="menuclick"
            ></ejs-contextmenu>
          </ejs-treeview>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss"></style>
