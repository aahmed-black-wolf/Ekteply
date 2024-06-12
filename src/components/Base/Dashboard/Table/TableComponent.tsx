"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getKeyValue,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import Container from "../../Global/Providers/Container";
import { data, entry } from "./data";
import Deleter from "./Deleter";

export default function TableComponent() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const [isClient, setIsClient] = useState(false);

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderCell = useCallback((item: any, columnKey: any) => {
    if (columnKey == "management") {
      return <Deleter />;
    }
    return getKeyValue(item, columnKey);
  }, []);

  return (
    <Container fullWidth>
      <div className="flex flex-col gap-3 ">
        {isClient && (
          <Table
            isStriped
            align="right"
            color={"warning"}
            className="w-full flex-1"
            selectionMode="multiple"
            dir="ltr"
            classNames={{
              wrapper: "shadow-none -full bg-transparent",
              table: "min-h-[250px] md:h-max",
            }}
            aria-label="Example static collection table"
            topContent={
              <div className="flex  w-[600px] justify-end md:hidden">
                <Pagination
                  dir="ltr"
                  isCompact
                  showControls
                  showShadow
                  size="sm"
                  color="warning"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  dir="ltr"
                  isCompact
                  showControls
                  showShadow
                  size="sm"
                  color="warning"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn allowsSorting allowsResizing key={"search"}>
                مفتاح البحث
              </TableColumn>
              <TableColumn allowsSorting allowsResizing key={"process"}>
                تاريخ المعالجه
              </TableColumn>
              <TableColumn allowsSorting allowsResizing key={"numFiles"}>
                عدد الملفات
              </TableColumn>
              <TableColumn allowsSorting allowsResizing key={"files"}>
                الملفات
              </TableColumn>
              <TableColumn allowsSorting allowsResizing key={"management"}>
                اداره الملفات
              </TableColumn>
            </TableHeader>
            <TableBody
              emptyContent={"لا توجد بينات !"}
              // loadingContent={<Spinner color="warning" />}
              // loadingState="error"
              // isLoading={true}
              items={items}
            >
              {(item: entry) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </Container>
  );
}
