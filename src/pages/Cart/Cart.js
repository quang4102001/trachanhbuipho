import { useContext, useEffect, useState } from "react";
import MaterialReactTable from "material-react-table";
import { clsx } from "clsx";

import HeaderPage from "./../../component/HeaderPage/HeaderPage";
import { cartContext } from "./../../App";
import styles from "./Cart.module.scss";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const { cart, setCart } = useContext(cartContext);

  const isNumberSuccess = (number, id) => {
    if (number > 0) {
      return setCart((preCart) =>
        preCart.map((cart) =>
          cart.id === id ? { ...cart, number: Number(number) } : cart
        )
      );
    } else {
      return setCart((preCart) => preCart.filter((cart) => cart.id !== id));
    }
  };

  const numberInputChange = (number, id) => {
    isNumberSuccess(number, id);
  };

  const deleteItem = (id) => {
    setCart((preCart) => preCart.filter((cart) => cart.id !== id));
  };

  const sumMoney = cart.reduce((acc, item) => acc + item.number * item.price, 0)

  const columns = [
    {
      accessorKey: "id",
      header: "Mã",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
    },
    {
      accessorKey: "name",
      header: "Tên",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      minSize: 200,
    },
    {
      accessorKey: "price",
      header: "Giá",
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      minSize: 100,
    },
    {
      accessorKey: "number",
      header: "Số lượng",
      minSize: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ row }) => (
        <input
          type="number"
          className={clsx(styles["form-control"], "form-control")}
          value={row.original.number}
          onChange={(e) => numberInputChange(e.target.value, row.original.id)}
          required
        />
      ),
    },
    {
      accessorKey: "money",
      header: "Thành tiền",
      minSize: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ row }) => {
        const money = row.original.price * row.original.number;
        return money;
      },
    },
    {
      accessorKey: "action",
      header: "Hành động",
      minSize: 100,
      muiTableHeadCellProps: {
        align: "center",
      },
      muiTableBodyCellProps: {
        align: "center",
      },
      Cell: ({ row }) => (
        <IconButton
          className={clsx(styles["btn-del"], "")}
          aria-label="delete"
          onClick={() => deleteItem(row.original.id)}
          size="large"
          color="error"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <HeaderPage headerText="Giỏ hàng" />
      <div className={clsx(styles["container"])} style={{ padding: "0 16px" }}>
        <MaterialReactTable
          columns={columns}
          data={cart}
          enableColumnFilters={false}
          enableTopToolbar={false}
          parentChildData={(row, rows) =>
            rows.find((a) => a.id === row.parentId)
          }
          localization={{
            body: {
              emptyDataSourceMessage: "Chưa có sản phẩm nào",
            },
          }}
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: "var(--primary-color)",
              color: "white",
            },
          }}
          options={{
            actionsColumnIndex: -1,
            paging: true,
            pageSize: 5,
            localization: {
              pagination: {
                labelDisplayedRows: "{from}-{to} of {count}",
                labelRowsSelect: "rows per page",
                firstAriaLabel: "First Page",
                firstTooltip: "First Page",
                previousAriaLabel: "Previous Page",
                previousTooltip: "Previous Page",
                nextAriaLabel: "Next Page",
                nextTooltip: "Next Page",
                lastAriaLabel: "Last Page",
                lastTooltip: "Last Page",
              },
            },
            search: false,
            rowStyle: (rowData) => ({
              backgroundColor: rowData.tableData.id % 2 === 1 ? "#EEE" : "#FFF",
            }),
            maxBodyHeight: "450px",
            minBodyHeight: "370px",
            headerStyle: {
              backgroundColor: "#358600",
              color: "#fff",
            },
            toolbar: false,
          }}
        />
        <p className={clsx(styles["sum-money"], "fw-bold mt-4 me-4 text-end")}>Tổng tiền: {sumMoney}</p>
      </div>
    </>
  );
}

export default Cart;
