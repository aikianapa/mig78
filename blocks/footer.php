<edit header="Подвал сайта">
    <div>
        <wb-module wb="module=yonger&mode=edit&block=common.inc" />
    </div>
    <!--wb-multiinput name="menu">
            <div class="col-lg-5 mb-2">
                <input name="button" class="form-control" placeholder="Заголовок" wb="module=langinp" required>
            </div>
            <div class="col-lg-7 mb-2">
                <input class="form-control" type="text" name="link" placeholder="Ссылка">
            </div>
    </wb-multiinput-->
    <div class="divider-text">Дополнительные адреса</div>
    <wb-multiinput name="add">
        <input name="address" class="form-control" placeholder="Заголовок" wb="module=langinp" required>
    </wb-multiinput>
</edit>
<view>
    <footer>
        <div class="footer-top position-relative">

            <img class="footer-shape" src="assets/images/footer/1.png" alt="shape">
            <div class="container">
                <div class="row mb-n7">
                    <div class="col-lg-5 col-sm-6 mb-7">
                        <div class="footer-widget">
                            <div class="footer-logo mb-9">
                            <a class="" href="/">
                            Мигрант 78
                            </a>
                            </div>
                            <p>
                            Помощь иностранным гражданам для легального проживания на территории РФ
                            </p>
                            <ul class="footer-social-links">
                                <!--
                                <li>
                                    <a class="footer-social-link" href="index.html#"><i class="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a class="footer-social-link" href="index.html#"><i class="icofont-instagram"></i></a>
                                </li>
                                <li>
                                    <a class="footer-social-link" href="index.html#"><i class="icofont-twitter"></i></a>
                                </li>
                                -->
                                <li>
                                    <a class="footer-social-link" href="{{_sett.telegram}}"><h2><i class="icofont-telegram"></i></h2></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--div class="col-lg-3 col-sm-6 mb-7">
                        <div class="footer-widget">
                            <h4 class="title">Меню</h4>
                            <ul class="footer-menu">
                            <wb-foreach wb-from="menu" wb-tpl="false">
                                <li><a class="footer-link" href="{{link}}">{{button.{{_sess.lang}}}}</a></li>
                            </wb-foreach>
                            </ul>
                        </div>
                    </div-->

                    <div class="col-lg-7 col-sm-6 mb-7">
                        <div class="footer-widget">
                            <h4 class="title">Контакты</h4>
                            <p>{{_sett.address}}</p>
                            <wb-foreach wb-from="add">
                                {{address.{{_sess.lang}}}}
                            </wb-foreach>
                            <ul class="address">
                                <li>
                                    <a class="address-link" href="tel:+{{text2tel({{_sett.phone}})}}">{{_sett.phone}}</a>
                                </li>
                                <li>
                                    <a class="address-link" href="mailto:{{_sett.email}}">{{_sett.email}}</a>
                                </li>
                                <li>
                                    <a class="address-link" href="{{_route.host}}">{{_route.hostname}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- coppy right satrt -->
        <div class="copy-right-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="copyright-info text-center">
                            <p>
                                Сделано © <span id="currentYear"></span>
                                с помощью
                                <a href="http://digiport.ru/" target="_blank">
                                WebBasic</a>, легко и просто
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script src="assets/js/vendor/vendor.min.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/vendor/parallax.js"></script>
    <script src="assets/js/plugins/plugins.min.js"></script>
    <script src="assets/js/ajax-contact.js"></script>
    <script src="assets/js/main.min.js"></script>
</view>