import Mask from "./Mask";
import Body from "./Body";
import LipColor from "./LipColor";
import SkinTone from "./SkinTone";
import Hair from "./Hair";
import HairColor from "./HairColor";
import Clothing from "./Clothing";
import ClothingColor from "./ClothingColor";
import Graphic from "./Graphic";
import Eyes from "./Eyes";
import Eyebrows from "./Eyebrows";
import Mouth from "./Mouth";
import FacialHair from "./FacialHair";
import Accessory from "./Accessory";
import Hat from "./Hat";
import Lashes from "./Lashes";
import HatColor from "./HatColor";

export interface ISelectField {
    initialValue: string
}

export interface ISwitchField {
    initialValue: boolean
}

export default {
    Mask,
    Body,
    LipColor,
    SkinTone,
    Hair,
    HairColor,
    Clothing,
    ClothingColor,
    Graphic,
    Eyes,
    Eyebrows,
    Mouth,
    FacialHair,
    Accessory,
    Hat,
    HatColor,
    Lashes,
}
