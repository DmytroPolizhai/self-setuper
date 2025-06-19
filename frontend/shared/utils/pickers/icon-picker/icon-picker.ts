
import { launchImageLibrary } from 'react-native-image-picker';
import Picker from "../picker";
import { Path, Title } from "@/shared/types";

export type Icon = {
    alt?: Title;
    uri?: Path;
}


export class IconPicker implements Picker<Icon> {
    async pick(): Promise<Icon> {
        try {
            return launchImageLibrary({
                mediaType: 'photo',
                maxWidth: 2048,
                maxHeight: 2048,
                quality: 0.6
            })
            .then(response => {
                if (response.didCancel) console.warn("Icon loading canceled");
                if (response.errorCode) console.error(response.errorMessage || response.errorCode);
                if (response.assets && response.assets.length > 0) {
                    return response.assets[0];
                }
            })
            .then(asset => {
                console.log(asset);
                return {
                    alt: "icon",
                    uri: asset?.uri,
                } as Icon
            })
        }
        catch(err) {
            console.error(err);
            return {};
        }
    }
}


