import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const BlogPosts = () => {
  return (
    <Fragment>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-9.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2022</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Trong trẻo đầu hạ cùng các thiết kế của Toson
              </Link>
            </h4>
            <p>
              Mùa Hạ được ví von như là quãng thời gian đáng nhớ nhất của mỗi
              người – rạng rỡ, nồng nhiệt, tràn đầy sức sống và chẳng ngại đắm
              say với những giấc mơ nở rộ như hoa.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  Đọc thêm
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-8.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2022</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Bí kíp chọn áo blazer để không bị trông già !!!
              </Link>
            </h4>
            <p>
              Thời tiết như bây giờ có thể nói đang là khoảng thời gian phái đẹp
              yêu thích nhất. Những bộ cánh “mát mẻ” mùa hè được nhường chỗ cho
              những chiếc áo khoác nữ nhẹ nhàng, nền nã và duyên dáng hơn mà
              điển hình là áo blazer.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  Đọc thêm
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-7.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                BST “Tiệc Đêm ” - Buổi tiệc lung linh dành riêng cho nàng
              </Link>
            </h4>
            <p>
              Thời điểm cuối năm dần dần trôi qua, một mùa lễ hội - Mùa của
              những buổi tiệc Year-End-Party đang đến gần hơn. Hãy cùng Toson
              hòa mình vào sắc màu lung linh của những buổi tiệc này ngay thôi
              nào!
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-6.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Những set đồ bộ công sở nhất định phải có trong mùa Thu Đông
                2021
              </Link>
            </h4>
            <p>
              Set bộ công sở Toson - items không thể thiếu dành cho các cô nàng
              trendy. Thời tiết này mà mặc set bộ công sở là quá chuẩn rồi các
              nàng ơi, vừa chỉn chu, ấm áp lại cực kỳ thời trang sành điệu.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-5.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Vải dạ là gì? Các loại vải dạ và cách nhận biết.
              </Link>
            </h4>
            <p>
              Như một vòng lặp thời trang kỳ diệu, mỗi độ đông về chất liệu dạ
              lại được lên ngôi, chiếm trọn spotlight trong lòng phái đẹp. Để
              hiểu rõ hơn về vải dạ, ưu nhược điểm cũng như các loại dạ, cùng
              Toson tìm hiểu kỹ hơn nhé.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-4.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Tổng hợp 3 thiết kế váy che khuyết điểm cho nàng “ béo bụng”
              </Link>
            </h4>
            <p>
              Vòng 2 quá khổ luôn là nỗi ám ảnh của không ít chị em phụ nữ khối
              văn phòng, nhất là trong khoảng lựa chọn trang phục. Để cải thiện
              điều này, ngoài việc tích cực vận động, chị em cũng có thể “giấu
              nhẹm” khuyết điểm trên thông qua những kiểu váy đầm “hack dáng”
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPosts;
