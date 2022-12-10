import React, { useCallback } from "react";
import { Space, Table, Button, Drawer, Row, Input, Form, Col, Tag } from "antd";
import { useEffect } from "react";
import {
  changeBill,
  createBill,
  deleteBill,
  getAllBill,
  getBillById,
} from "../../../services/bill/bill.api";
import { useState } from "react";
import { CHANGE_DATA, CREATE_DATA } from "../admin.contant";
import { toast } from "react-toastify";

const BillDetail = () => {
  const [allData, setAllData] = useState([]);
  const [type, setType] = useState("");
  const [idData, setIdData] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const getCallBack = useCallback(() => {
    getAllBill().then((res) => {
      if (res) {
        setAllData(res.data);
        console.log(res.data);
      }
    });
  }, []);

  useEffect(() => {
    getCallBack();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Đơn đặt hàng",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Space Bill="middle">
          <Tag color="green">Đơn đặt hàng số {record.id}</Tag>
          <Tag color="blue">{record.lastName} {record.firstName}</Tag>
        </Space>
      ),
    },

    {
      title: "Ngày đặt",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <Space Bill="middle">
          {record.country}, {record.street}, {record.city}
        </Space>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space Bill="middle">
          <Button type="danger" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const hanleShowDrawer = (record) => {
    setType(CHANGE_DATA);
    setIdData(record.id);
    setOpen(true);
    getBillById(record.id).then((res) => {
      setName(res.data.name);
    });
  };

  const handleCreate = (record) => {
    setType(CREATE_DATA);
    setOpen(true);
    setName("");
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDelete = (record) => {
    deleteBill(record.id).then((res) => {
      if (res) {
        getCallBack();
        toast.success('Đã xóa thành công')
      }
    });
  };

  const onSubmit = () => {
    if (type === CREATE_DATA) {
      createBill(name).then((res) => {
        if (res) {
          getCallBack();
          setOpen(false);
        }
      });
    } else {
      changeBill(idData, name).then((res) => {
        if (res) {
          getCallBack();
          setOpen(false);
        }
      });
    }
  };

  return (
    <div>
      <div className="table">
        <Table columns={columns} dataSource={allData} />
      </div>
      <Drawer
        title={`${type === CHANGE_DATA ? "Change Data" : "Create Data"}`}
        width={720}
        placement="right"
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Space>
        }
      >
        <Row gutter={16}>
          <Col span={24}>
            <Input
              value={name}
              placeholder="Please enter user name"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default BillDetail;
