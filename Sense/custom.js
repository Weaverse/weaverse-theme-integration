console.log("💿 Running custom code...");
try {
  window.weaverseCartHelpers.subscribe("on_item_added", (item) => {
    let cart =
      document.querySelector("cart-notification") ||
      document.querySelector("cart-drawer");
    cart.renderContents(item);
  });
  window.weaverseCartHelpers.subscribe("on_product_rendered", ({ formRef }) => {
    if (formRef.current) {
      let input = formRef.current.querySelector("#wv-input-sections_url");
      input.value = window.weaverseShopifyConfigs.shopData.request.path;
    }
  });
} catch (error) {
  console.error("[WEAVERSE] - error running custom code", error);
}
