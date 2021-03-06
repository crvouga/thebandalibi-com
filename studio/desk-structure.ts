//@ts-ignore
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

export default () =>
  S.list()
    .title("Content")
    .showIcons(true)
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .title("Site Settings")
            .schemaType("settings")
            .documentId("settings")
        ),

      ...S.documentTypeListItems().filter(
        (listItem: any) => !["settings"].includes(listItem.getId())
      ),
    ]);
