<script setup lang="ts">


/* =======================
* Page Metadata
* ======================= */



/* =======================
* Components & Utilities
* ======================= */
import {
  Audio,
  Count,
  RichTextEditorComponent as EjsRichtexteditor,
  EmojiPicker,
  FileManager,
  FormatPainter,
  HtmlEditor,
  Image,
  ImportExport,
  Link,
  PasteCleanup,
  QuickToolbar,
  SlashMenu,
  Table,
  Toolbar,
  Video,
} from "@syncfusion/ej2-vue-richtexteditor";
import { provide } from "vue";


/* =======================
* GraphQL
* ======================= */



/* =======================
* Interfaces
* ======================= */

interface Props {
    label?: string;
    content : string |  null | undefined;
}
/* 
Type 'InputMaybe<string> | undefined' is not assignable to type 'string | undefined'.
  Type 'null' is not assignable to type 'string | undefined'.ts-plu */



/* =======================
* Props & Emits
* ======================= */
const props = withDefaults(defineProps<Props>(), {
    label: "",
    content : ""
})

const emit = defineEmits<{
    (e: 'update:content', content: string): void;
}>();



/* =======================
* Provides
* ======================= */
provide("richtexteditor", [
  Toolbar,
  Link,
  Image,
  Count,
  HtmlEditor,
  QuickToolbar,
  Table,
  FileManager,
  EmojiPicker,
  Video,
  Audio,
  FormatPainter,
  PasteCleanup,
  SlashMenu,
  ImportExport,
]);



/* =======================
* Refs & Reactive State
* ======================= */


const textEditorValue = ref();

const hostUrl = "https://services.syncfusion.com/vue/production/";

const quickToolbarSettings = {
  table: [
    "TableHeader",
    "TableRows",
    "TableColumns",
    "TableCell",
    "-",
    "BackgroundColor",
    "TableRemove",
    "TableCellVerticalAlign",
    "Styles",
  ],
  showOnRightClick: true,
};

const slashMenuSettings = {
  enable: true,
  items: [
    "Paragraph",
    "Heading 1",
    "Heading 2",
    "Heading 3",
    "Heading 4",
    "OrderedList",
    "UnorderedList",
    "CodeBlock",
    "Blockquote",
    "Link",
    "Image",
    "Video",
    "Audio",
    "Table",
    "Emojipicker",
  ],
};

const richTextInstance = ref(null);

const fileManagerSettings = {
  enable: true,
  path: "/Pictures/Food",
  ajaxSettings: {
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl:
      "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl:
      "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl:
      "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download",
  },
};
const toolbarSettings = {
  type: "MultiRow",
  items: [
    "Undo",
    "Redo",
    "|",
    "ImportWord",
    "ExportWord",
    "ExportPdf",
    "|",
    "Bold",
    "Italic",
    "Underline",
    "StrikeThrough",
    "InlineCode",
    "SuperScript",
    "SubScript",
    "|",
    "NumberFormatList",
    "BulletFormatList",
    "|",
    "FontName",
    "FontSize",
    "FontColor",
    "BackgroundColor",
    "|",
    "LowerCase",
    "UpperCase",
    "|",
    "Formats",
    "Alignments",
    "Blockquote",
    "|",

    "Outdent",
    "Indent",
    "|",
    "CreateLink",
    "FileManager",
    "Image",
    "Video",
    "Audio",
    "CreateTable",
    "|",
    "FormatPainter",
    "ClearFormat",
    "|",
    "EmojiPicker",
    "Print",
    "|",
    "SourceCode",
    "FullScreen",
  ],
};

const exportPdf = {
  serviceUrl: hostUrl + "api/RichTextEditor/ExportToPdf",
  fileName: "RichTextEditor.pdf",
  stylesheet: `
                    .e-rte-content{
                        font-size: 1em;
                        font-weight: 400;
                        margin: 0;
                    }
                `,
};

const importWord = {
  serviceUrl: hostUrl + "api/RichTextEditor/ImportFromWord",
};
const exportWord = {
  serviceUrl: hostUrl + "api/RichTextEditor/ExportToDocx",
  fileName: "RichTextEditor.docx",
  stylesheet: `
                    .e-rte-content {
                        font-size: 1em;
                        font-weight: 400;
                        margin: 0;
                    }
                `,
};


/* =======================
 * Form State
 * ======================= */


/* =======================
* GraphQL Mutations
* ======================= */



/* =======================
* Methods
* ======================= */



/* =======================
* Watchers
* ======================= */

watch(
    () => textEditorValue.value,
    (newVal) => {
        emit('update:content', newVal);
    },
);

 watch(
    () => props.content,
    (newValue) => {
      textEditorValue.value = newValue; 
    },
    { immediate: true }
); 

/* =======================
* Computed Properties
* ======================= */



/* =======================
* Exposes
* ======================= */


</script>

<template>
  <div>
    
    <VLabel class="mb-1 text-body-2 text-wrap text-bold" style="color: #2f2b3de6;" v-if="props.label ">
            {{props.label }} 
        </VLabel>
    <ejs-richtexteditor
    v-model="textEditorValue"  
     height="350px"
      id="default"
      ref="richTextInstance"
      :value="textEditorValue"
      :toolbarSettings="toolbarSettings"
      :slashMenuSettings="slashMenuSettings"
      :quickToolbarSettings="quickToolbarSettings"
      :fileManagerSettings="fileManagerSettings"
      :exportPdf="exportPdf"
      :importWord="importWord"
      :exportWord="exportWord"
    ></ejs-richtexteditor>
  </div>
</template>
<style lang="scss" scoped>
::v-deep(.e-rte-content ul) {
  list-style-type: disc !important; /* Ensures bullets are visible */
  padding-left: 20px !important; /* Adjust indentation */
}

::v-deep(.e-rte-content ol) {
  list-style-type: decimal !important; /* Ensures numbers are visible */
  padding-left: 20px !important;
}

::v-deep(.e-rte-content li) {
  margin-left: 20px !important;
}

/* Fix tab indentation inside RTE */
::v-deep(.e-rte-content) {
  white-space: normal !important;
}
</style>
