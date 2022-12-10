import React, { useCallback } from "react";
import { Space, Table, Button, Drawer, Row, Input, Form, Col } from "antd";
import { useEffect } from "react";
import {
  changeSize,
  createSize,
  deleteSize,
  getAllSize,
  getSizeById,
} from "../../../services/size/size.api";
import { useState } from "react";
import { CHANGE_DATA, CREATE_DATA } from "../admin.contant";
import { toast } from "react-toastify";

const Size = () => {
  const [allData, setAllData] = useState([]);
  const [type, setType] = useState("");
  const [idData, setIdData] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const getCallBack = useCallback(() => {
    getAllSize().then((res) => {
      if (res) {
        setAllData(res.data);
      }
    });
  }, []);

  useEffect(() => {
    getCallBack();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "CreatedDate",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "LastModifiedDate",
      dataIndex: "lastModifiedDate",
      key: "lastModifiedDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => hanleShowDrawer(record)}>Change</Button>
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
    getSizeById(record.id).then((res) => {
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
    deleteSize(record.id).then((res) => {
      if (res) {
        getCallBack();
      }
    });
  };

  const onSubmit = () => {
    if (type === CREATE_DATA) {
      createSize(name).then((res) => {
        if (res) {
          getCallBack();
          setOpen(false);
          toast.success('Đã tạo thành công')
        }
      });
    } else {
      changeSize(idData, name).then((res) => {
        if (res) {
          getCallBack();
          setOpen(false);
          toast.success('Đã sửa thành công')
        }
      });
    }
  };

  return (
    <div>
      <div style={{ margin: "15px 0" }}>
        <Button type="primary" onClick={handleCreate}>
          Create
        </Button>
      </div>
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

export default Size;
