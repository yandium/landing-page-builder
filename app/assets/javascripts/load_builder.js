$(() => {
    const tags = [
        { type: "label", tag: "{CONTACT_FIRST_NAME}" },
        { type: "label", tag: "{CONTACT_LAST_NAME}" },
        { type: "label", tag: "{CONTACT_FULL_NAME}" },
        { type: "label", tag: "{CONTACT_EMAIL}" },
        { type: "label", tag: "{CONTACT_PHONE}" },
        { type: "label", tag: "{CONTACT_ADDRESS}" },
        { type: "label", tag: "{ORDER_ID}" },
        { type: "label", tag: "{ORDER_DUE}" },
        { type: "label", tag: "{ORDER_TAX}" },
        { type: "label", tag: "{PRODUCT_NAME}" },
        { type: "label", tag: "{PRODUCT_PRICE}" },
        { type: "label", tag: "{PRODUCT_QTY}" },
        { type: "label", tag: "{PRODUCT_SKU}" },
        { type: "label", tag: "{AGENT_NAME}" },
        { type: "label", tag: "{AGENT_SIGNATURE}" },
        { type: "label", tag: "{AGENT_MOBILE_PHONE}" },
        { type: "label", tag: "{AGENT_ADDRESS}" },
        { type: "label", tag: "{AGENT_WEBSITE}" },
        { type: "label", tag: "{AGENT_DISCLAIMER}" },
        { type: "label", tag: "{CURRENT_DATE}" },
        { type: "label", tag: "{CURRENT_MONTH}" },
        { type: "label", tag: "{CURRENT_YEAR}" }
    ];

    const id = $("#landingpage_id").val() || "";
    const baseUrl = `${window.location.origin}/landing_pages`;

    window.editor = new Editor({
        root: "/builder/",
        url: id ? `${baseUrl}/${id}` : "",
        urlBack: `${baseUrl}`,
        templates: [],
        tags,
        saveUrl: `${baseUrl}/${id}`,
        saveMethod: id ? "PUT" : "POST",
        uploadAssetMethod: "POST",
        uploadAssetUrl: `${baseUrl}/set_asset`,
        changeTemplateCallback: url => {}
    });
    editor.init();
});
