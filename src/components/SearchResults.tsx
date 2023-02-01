import { List, AutoSizer, ListRowRenderer } from "react-virtualized";

import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
  totalPrice: number;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem key={key} product={results[index]} onAddToWishList={onAddToWishList} />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        width={900}
        height={300}
        rowHeight={25}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map((product) => {
        return <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />;
      })} */}
    </div>
  );
}
