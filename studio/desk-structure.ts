//@ts-ignore
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

export default () =>
  S.list()
    .title("Content")
    .showIcons(true)
    .items([
      S.listItem()
        .title("Configuration")
        .icon(MdSettings)
        .child(
          S.editor()
            .title("Configuration")
            .schemaType("settings")
            .documentId("settings")
        ),

      ...S.documentTypeListItems().filter(
        (listItem: any) => !["settings"].includes(listItem.getId())
      ),
    ]);
