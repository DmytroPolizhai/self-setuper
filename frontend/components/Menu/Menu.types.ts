import { MenuItem } from "./MenuItem/MenuItem";
import { ReactElement } from "react";

export type Props = {
    children: ReactElement<typeof MenuItem>[] | ReactElement<typeof MenuItem>;
    onDismiss?: () => void;
}