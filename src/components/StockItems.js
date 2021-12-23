const StockItem = ({ item }) => {
  const { code, close, name, change_info, category } = item;
  const [category1, category2, category3] = category.split("-");
  const [dircetion, dircetionNumber] = change_info.split(",");
  // const dircetionClassName  = 'unChange'
  // switch (dircetion) {
  //   case 'Up'
  //   dircetionClassName = 'red'
  // }
  return (
    <div className="stockItem">
      <span className="stockCateGory">{category2}</span>
      <div className="stockName stockInner">
        <h4>{name}</h4>
        <span>{code}</span>
      </div>
      <div className="stockNumber stockInner">
        <h4 className={dircetion}>{close}</h4>
        <span className={`samllTitle ${dircetion}`}>{dircetionNumber}</span>
      </div>
      <div className="stockType stockInner">
        <span className="">{category1}</span>
        <span className="">{category3}</span>
      </div>
    </div>
  );
};
export default StockItem;
