import React, {useState} from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, Divider } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// Component for the favorite cards used in Level 4
export default function ProductCard(props) {
    // gets the picture to be shown on the card from props
    const { id, pic, desc, price, color } = props.item;

    const [dialogOpen, setDialogOpen] = useState(false);

    function toggleDialog(e) {
        //props.logClick(e, 17);
        let value = dialogOpen;
        setDialogOpen(!value);
    }

    return (
        <>
            <div className="pro-card">
                <img
                    className="product-pic"
                    alt="pic"
                    src={pic}
                />
                <h4 style={{ textAlign: 'center', padding: 0 }}>{desc}</h4>
                <div className="mid">
                    <button
                        className="shop-button"
                        id="shop card"
                        onClick={(e) => toggleDialog(e)}
                    >
                        Quick Shop
                    </button>
                </div>
            </div>
            <Dialog open={dialogOpen} disableEscapeKeyDown disableBackdropClick hideBackdrop>
                <DialogTitle>
                    {desc}
                    <IconButton
                        id="Navigated away from the pop up by clicking the X to close it."
                        style={{
                            position: "absolute",
                            right: 2,
                            top: 2,
                            outline: "none",
                        }}
                        onClick={(e) => toggleDialog(e)}
                        color="inherit"
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <Divider />
                <DialogContent style={{ width: '450px' }}>
                    <img
                        className="product-pic"
                        style={{ float: "left" }}
                        alt="pic"
                        src={pic}
                    />
                    <h4 style={{ paddingLeft: '200px' }}>Price: ${price}</h4>
                    <IconButton
                        id={"Added card number " + id + "."}
                        onClick={(e) => props.addItem(e, props.item)}
                    >
                        <AddShoppingCartIcon style={{ height: '40px', width: '40px' }}/>
                    </IconButton>
                    <IconButton
                        style={{ color: color, height: '40px', width: '40px' }}
                        id={"Favorited card number " + id + "."}
                        onClick={(e, i) => props.updateColor(e, id)}
                    >
                        <FavoriteIcon />
                    </IconButton>
                </DialogContent>
            </Dialog>
        </>
    )
}

// defines the props the component expects
ProductCard.propTypes = {
    isJewelShown: PropTypes.bool,   // boolean for if the jewel is shown in the level
    color: PropTypes.string,        // color of the heart on the card
    id: PropTypes.number,           // number of the card that was clicked on
}