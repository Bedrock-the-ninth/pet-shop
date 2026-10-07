// @path: src/components/ui/ProductCard/productCard.styles.ts
const ProductCardClassStyles = {
  mainDivClass:
    "relative flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-background-raised shadow-shadow transition-transform hover:-translate-y-1",
  trashCanButtonClass:
    "absolute right-3 top-3 z-10 rounded-full p-2 text-accent transition-colors hover:bg-accent hover:text-white",
  imageDivClass: "flex h-55 items-center justify-center p-4",
  imageTagClass: "h-full w-full object-contain",
  productInfo: {
    mainDivClass: "flex flex-1 flex-col gap-2 border-t border-border p-4",
    titleClass: "text-lg text-text-h font-semibold",
    priceTagClass: "text-xl font-bold text-accent",
    stockAlertClass: "text-sm text-muted",
    cartControls: {
      mainDivClass: "mt-auto pt-3",
      mainControlDivClass:
        "flex items-center text-text-color justify-center gap-4",
      reduceButtonClass:
        "flex h-9 w-9 items-center justify-center rounded-full border border-border text-lg transition-colors hover:bg-accent hover:text-white",
      quantityInCartClass: "min-w-6 text-center font-semibold",
      increaseButtonClass:
        "flex h-9 w-9 items-center justify-center rounded-full border border-border text-lg transition-colors hover:bg-accent hover:text-white disabled:bg-muted disabled:border-accent-soft",
      addToCartButtonClass:
        "w-full rounded-xl bg-accent px-4 py-2 font-semibold text-white transition-transform hover:scale-[1.02]",
    },
  },
};

export default ProductCardClassStyles;
