/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductItem, { ItemProps } from ".";

const mockData : ItemProps = {
    "id": 1,
    "name": "Super Product 1",
    "description": "Some text for this super product that all want to buy...",
    "info": [
        "Info1 Info1 Info1 Info1 Info1 Info1",
        "Info2",
        "Info3",
        "Info4",
        "Info5",
        "Info6"
    ],
    "price": 120,
    "discount": 569
};

describe("Product Item", () => {
    afterEach(() => jest.clearAllMocks());

    it("Show/hide info when clicking 'more info'", () => {
        const mockUpdateList = jest.fn();
        render(
            <ProductItem updateList={mockUpdateList} item={mockData} />,
        );
        const moreInfoButton = screen.getByTestId("more-info-button");
        const infoList = screen.getByTestId("info-list");
        expect(infoList).not.toBeVisible();
        
        fireEvent.click(moreInfoButton);
        expect(infoList).toBeVisible();

        fireEvent.click(moreInfoButton);
        expect(infoList).not.toBeVisible();
    });

    it("Add to list when clicking the button", () => {
        const mockUpdateList = jest.fn();
        render(
            <ProductItem updateList={mockUpdateList} item={mockData} />,
        );
        const addButton = screen.getByTestId("add-button");
        fireEvent.click(addButton);
        expect(mockUpdateList).toHaveBeenCalledTimes(1);
    });
});