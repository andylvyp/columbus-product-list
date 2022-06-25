import React, { useState } from "react";
import { Button, makeStyles, Paper } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ProductImage from "../../resources/PlaceHolder.jpeg";
import "./styles.scss";

export interface ItemProps {
    id: number;
    name: string;
    description: string;
    info: string[];
    price: number;
    discount?: number;
}

interface ProductItemProps {
    item: ItemProps;
    updateList: (item: ItemProps) => void;
}

export default function ProductItem({item, updateList}: ProductItemProps) {
    const [infoOpen, setInfoOpen] = useState<boolean>(false);
    const useStyles = makeStyles(() => ({
        productItem: {
            borderRadius: 10,
            overflow: "hidden",
            width: 250,
            height: 520,
        }
    }));
    const classes = useStyles();

    return(
        <div style={{ margin: "0 auto 50px" }}>
            <Paper elevation={2} className={classes.productItem}>
                <div className="item-container">
                    <div className="item-image-container">
                        <img src={ProductImage} alt={`${item.name}-image`} className="item-image" />
                    </div>
                
                    <div className="item-text-container">
                        <div className="item-text-name">{item.name}</div>
                        <div className="item-text-description">{item.description}</div>
                        <div onClick={() => setInfoOpen(!infoOpen)} className="item-more-info" data-testid="more-info-button">
                            {infoOpen ?
                                <KeyboardArrowUpIcon style={{ width: "20px", height: "20px" }} />
                                :
                                <KeyboardArrowDownIcon style={{ width: "20px", height: "20px" }} />
                            }
                            <div>See information</div>
                        </div>
                        <ul className="info-list" style={{ visibility: infoOpen ? "visible" : "hidden", opacity: infoOpen ? "1" : "0" }} data-testid="info-list">
                            {item.info.map((info, index) =>
                                <li className="info-list-item" key={`item-info-${index}`}>
                                    {info}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="item-bottom">
                        <div className="item-price-container">
                            {item.discount ?
                                <>
                                    <div className="item-discount">{`${item.discount} :-`}</div>
                                    <div className="item-deprecated-price">{item.price}</div>
                                </>
                                :
                                <div className="item-price">{`${item.price} :-`}</div>
                            }
                        </div>
                        <div className="item-button-container">
                            <Button 
                                onClick={() => updateList(item)}
                                style={{
                                    backgroundColor: "#eee",
                                    fontSize: "14px",
                                    fontFamily: "Montserrat"
                                }}
                                data-testid="add-button"
                            >Add to list</Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
}