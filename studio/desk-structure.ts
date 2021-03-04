// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .title("Settings")
            .schemaType("settings")
            .documentId("settings")
        ),

      ...S.documentTypeListItems().filter(
        (listItem) => !["settings"].includes(listItem.getId())
      ),
    ]);
