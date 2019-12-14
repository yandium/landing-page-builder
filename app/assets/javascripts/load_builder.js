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

    const templates = [{
        name: 'Passion',
        url: window.location.origin + '/templates/Passion',
        thumbnail: '/templates/Passion/thumb.png',
    }, {
        name: 'Business Newsletter Gray',
        url: '/templates/Business_Newsletter_Gray',
        thumbnail: '/templates/Business_Newsletter_Gray/thumb.png',
    }, {
        name: 'Creative Newsletter',
        url: '/templates/Creative_Newsletter',
        thumbnail: '/templates/Creative_Newsletter/thumb.png',
    }];

    const id = $("#landingpage_id").val() || "";
    const baseUrl = `${window.location.origin}/landing_pages`;
    const initEditor = (template) => {
        window.editor = new Editor({
            root: "/builder/",
            url: template,
            urlBack: `${baseUrl}`,
            saveUrl: `${baseUrl}/${id}`,
            saveMethod: id ? "PUT" : "POST",
            uploadAssetMethod: "POST",
            uploadAssetUrl: `${baseUrl}/set_asset`,
            uploadTemplateUrl: `${baseUrl}/upload_template`,
            templates,
            tags,
            changeTemplateCallback: (url) => {
                initEditor(url);
            }
        });
        editor.init();
    }

    initEditor(id ? `${baseUrl}/${id}` : "/templates/New");
});
