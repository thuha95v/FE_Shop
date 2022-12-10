import React, { useCallback } from "react";
import {
  Space,
  Table,
  Button,
  Drawer,
  Row,
  Input,
  Typography,
  Col,
  Avatar,
  Select,
  Checkbox,
  Upload,
} from "antd";
import { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  changeProduct,
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
} from "../../../services/product/product.api";
import { useState } from "react";
import { CHANGE_DATA, CREATE_DATA } from "../admin.contant";
import { getAllCategory } from "../../../services/category/category.api";
import { getAllColor } from "../../../services/color/color.api";
import { getAllSize } from "../../../services/size/size.api";
import { getAllTag } from "../../../services/tag/tag.api";
import { toast } from "react-toastify";
import "./style.css";
const style = { padding: "20px 0" };
const { Text } = Typography;
const { Option } = Select;
const Product = () => {
  const [allData, setAllData] = useState([]);
  const [type, setType] = useState("");
  const [idData, setIdData] = useState(null);
  const [open, setOpen] = useState(false);
  const [resValueSelect, setResValueSelect] = useState({
    category: [],
    colors: [],
    sizes: [],
    tags: [],
  });
  const [valueObj, setValueObj] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    weight: "",
    dimension: "",
    material: "",
    otherInfo: "",
    categoryId: "",
    new: false,
    tags: [],
    sizes: [],
    colors: [],
    files: [],
    files2: [],
    files3: [],
  });

  // const [masterData, setMasterData] = useState({
  //   tags: [],
  //   productSizes: [],
  //   productColors: [],
  // });
  const getCallBack = useCallback(() => {
    getAllProduct().then((res) => {
      if (res) {
        setAllData(res.data);
      }
    });
  }, []);

  useEffect(() => {
    getCallBack();
    getAllCategory().then((res) => {
      if (res) {
        setResValueSelect((prev) => ({
          ...prev,
          category: res.data,
        }));
      }
    });
    getAllColor().then((res) => {
      if (res) {
        setResValueSelect((prev) => ({
          ...prev,
          colors: res.data,
        }));
      }
    });
    getAllSize().then((res) => {
      if (res) {
        setResValueSelect((prev) => ({
          ...prev,
          sizes: res.data,
        }));
      }
    });
    getAllTag().then((res) => {
      if (res) {
        setResValueSelect((prev) => ({
          ...prev,
          tags: res.data,
        }));
      }
    });
  }, [getCallBack]);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (_, record) => (
        <Avatar size={{ xxl: 100 }} src={record.images[0]?.link} />
      ),
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "dimension",
      dataIndex: "dimension",
      key: "dimension",
    },
    {
      title: "material",
      dataIndex: "material",
      key: "material",
    },
    {
      title: "otherInfo",
      dataIndex: "otherInfo",
      key: "otherInfo",
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      render: (_, record) => (
        <Space size="middle">{record.category.name}</Space>
      ),
    },
    {
      title: "tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, record) => (
        <Space size="middle">
          {record.tags.map((item, idx) => item.tag.name).join(", ")}
        </Space>
      ),
    },
    {
      title: "productSizes",
      dataIndex: "productSizes",
      key: "productSizes",
      render: (_, record) => (
        <Space size="middle">
          {record.productSizes.map((item, idx) => item.size.name).join(", ")}
        </Space>
      ),
    },
    {
      title: "productColors",
      dataIndex: "productColors",
      key: "productColors",
      render: (_, record) => (
        <Space size="middle">
          {record.productColors.map((item, idx) => item.color.name).join(", ")}
        </Space>
      ),
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
    getProductById(record.id).then((res) => {
      setValueObj({
        ...res.data,
        tags: res.data?.tags?.flatMap((item) => item?.tag.id),
        sizes: res.data?.productSizes?.flatMap((item) => item?.size.id),
        colors: res.data?.productColors?.flatMap((item) => item?.color.id),
        categoryId: res.data?.category.id,
      });
    });
  };

  const handleCreate = (record) => {
    setType(CREATE_DATA);
    setOpen(true);
    setValueObj({
      name: "",
      description: "",
      price: "",
      discount: "",
      weight: "",
      dimension: "",
      material: "",
      otherInfo: "",
      categoryId: "",
      new: false,
      tags: [],
      sizes: [],
      colors: [],
      files: [],
    });
  };

  // console.log(valueObj);

  const onClose = () => {
    setOpen(false);
  };

  const handleDelete = (record) => {
    deleteProduct(record.id).then((res) => {
      if (res) {
        getCallBack();
        toast.success("Đã xóa thành công");
      }
    });
  };

  const onSubmit = () => {
    if (type === CREATE_DATA) {
      createProduct(valueObj).then(
        (res) => {
          if (res) {
            getCallBack();
            setOpen(false);
            toast.success("Đã tạo thành công");
          }
        },
        (err) => {
          toast.error("Có lỗi. Vui lòng thử lại");
        }
      );
    } else {
      changeProduct(idData, valueObj).then((res) => {
        if (res) {
          getCallBack();
          setOpen(false);
          toast.success("Đã sửa thành công");
        }
      });
    }
  };

  // console.log(Object.keys(valueObj));

  const handleChangeCategory = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeCheckBox = (e) => {
    console.log(`selected ${e.target.checked}`);
  };

  return (
    <div className="antd">
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
        <Row gutter={16} style={style}>
          <Col span={12}>
            <Text level={5}>Name</Text>
            <Input
              value={valueObj.name}
              placeholder="Please enter Name"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </Col>
          <Col span={12}>
            <Text level={5}>Description</Text>
            <Input
              value={valueObj.description}
              placeholder="Please enter user Description"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
        <Row gutter={16} style={style}>
          <Col span={12}>
            <Text level={5}>Dimension</Text>
            <Input
              value={valueObj.dimension}
              placeholder="Please enter user Dimension"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  dimension: e.target.value,
                }))
              }
            />
          </Col>
          <Col span={12}>
            <Text level={5}>Discount</Text>
            <Input
              value={valueObj.discount}
              placeholder="Please enter user Discount"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  discount: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
        <Row gutter={16} style={style}>
          <Col span={12}>
            <Text level={5}>Material</Text>
            <Input
              value={valueObj.material}
              placeholder="Please enter user Material"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  material: e.target.value,
                }))
              }
            />
          </Col>
          <Col span={12}>
            <Text level={5}>OtherInfo</Text>
            <Input
              value={valueObj.otherInfo}
              placeholder="Please enter user OtherInfo"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  otherInfo: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
        <Row gutter={16} style={style}>
          <Col span={12}>
            <Text level={5}>Price</Text>
            <Input
              value={valueObj.price}
              placeholder="Please enter user Price"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  price: e.target.value,
                }))
              }
            />
          </Col>
          <Col span={12}>
            <Text level={5}>Weight</Text>
            <Input
              value={valueObj.weight}
              placeholder="Please enter user Weight"
              onChange={(e) =>
                setValueObj((prev) => ({
                  ...prev,
                  weight: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
        <Row gutter={16} style={style}>
          <Col span={12}>
            <Text level={5}>Category</Text>
            <Select
              placeholder="Select category"
              style={{ width: "100%" }}
              value={valueObj.categoryId}
              onChange={(value) =>
                setValueObj({
                  ...valueObj,
                  categoryId: value,
                })
              }
            >
              {resValueSelect.category.map((item, idx) => (
                <Option value={item.id} key={idx}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={12}>
            <Text level={5}>Colors</Text>
            <Select
              showArrow
              mode="multiple"
              placeholder="Select colors"
              style={{ width: "100%" }}
              value={valueObj.colors}
              onChange={(value) =>
                setValueObj({
                  ...valueObj,
                  colors: value,
                })
              }
            >
              {resValueSelect.colors.map((item, idx) => (
                <Option value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={16} style={style}>
          <Col span={12}>
            <Text level={5}>Sizes</Text>
            <Select
              showArrow
              mode="multiple"
              placeholder="Select sizes"
              style={{ width: "100%" }}
              value={valueObj.sizes}
              onChange={(value) =>
                setValueObj({
                  ...valueObj,
                  sizes: value,
                })
              }
            >
              {resValueSelect.sizes.map((item, idx) => (
                <Option value={item.id} key={idx}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={12}>
            <Text level={5}>Tags</Text>
            <Select
              showArrow
              mode="multiple"
              placeholder="Select tags"
              style={{ width: "100%" }}
              value={valueObj.tags}
              onChange={(value) =>
                setValueObj({
                  ...valueObj,
                  tags: value,
                })
              }
            >
              {resValueSelect.tags.map((item, idx) => (
                <Option value={item.id} key={idx}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={16} style={style}>
          <Col span={12}>
            <Checkbox
              style={{ width: "100%" }}
              checked={valueObj.new}
              onChange={(e) =>
                setValueObj({
                  ...valueObj,
                  new: e.target.checked,
                })
              }
            >
              IsNew
            </Checkbox>
          </Col>
          <Col span={12}>
            <Text level={5}>Upload Images 1</Text>
            <input
              type="file"
              onChange={(e) =>
                setValueObj({
                  ...valueObj,
                  files: e.target.files[0],
                })
              }
            />
            <Text level={5}>Upload Images 2</Text>
            <input
              type="file"
              onChange={(e) =>
                setValueObj({
                  ...valueObj,
                  files2: e.target.files[0],
                })
              }
            />
            <Text level={5}>Upload Images 3</Text>
            <input
              type="file"
              onChange={(e) =>
                setValueObj({
                  ...valueObj,
                  files3: e.target.files[0],
                })
              }
            />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default Product;
