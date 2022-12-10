import React, { useCallback } from "react";
import { Space, Table, Button, Drawer, Row, Input, Form, Col, Tag } from "antd";
import { useEffect } from "react";

import { useState } from "react";
import { CHANGE_DATA, CREATE_DATA } from "../admin.contant";
import { deleteContact, getAllContact } from "../../../services/contact/contact.api";
import { toast } from "react-toastify";

const Contact = () => {
  const [allData, setAllData] = useState([]);
  const getCallBack = useCallback(() => {
    getAllContact().then((res) => {
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
      title: "name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Space Bill="middle">
          <Tag color="green">{record.name}</Tag>
        </Space>
      ),
    },

    {
      title: "Ngày đặt",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "subject",
      dataIndex: "subject",
      key: "subject",
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

  const handleDelete = (record) => {
    deleteContact(record.id).then((res) => {
      if (res) {
        getCallBack();
        toast.success('Đã xóa thành công')
      }
    });
  };

  return (
    <div>
      <div className="table">
        <Table columns={columns} dataSource={allData} />
      </div>
    </div>
  );
};

export default Contact;
