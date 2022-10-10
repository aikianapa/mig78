<edit header="О нас">
    <div>
        <wb-module wb="module=yonger&mode=edit&block=common.inc" />
    </div>
    <wb-multilang wb-lang="{{_sett.locales}}" name="lang">
        <div class="form-group row">
            <label class="col-lg-3">Заголовок</label>
            <div class="col-lg-9">
                <input class="form-control" type="text" name="title">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-lg-3">Подзаголовок</label>
            <div class="col-lg-9">
                <input class="form-control" type="text" name="subtitle">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-12 mb-2">
                <textarea class="form-control" name="text" rows="auto" placeholder="Текст"></textarea>
            </div>
        </div>
    </wb-multilang>
</edit>

<view>
    <section class="about-us position-relative" id="about">
        <div class="container">
            <div class="row mb-n7">
                <!-- tile section start -->
                <div class="col-xl-5 col-lg-6 mb-7">
                    <div class="title-section">
                        <span class="sub-title">{{title}}</span>
                        <h3 class="title">
                            {{subtitle}}
                        </h3>
                        <!--span class="date-meta">Scince 2001 <span class="hr"></span>
                        </span-->
                        <p class="mb-5 text-break">{{text}}</p>
                        <!--a href="about.html" class="btn btn-lg btn-dark btn-hover-dark">Learn more</a-->
                    </div>
                </div>
                <!-- title section end -->
                <!-- about start -->
                <div class="col-xl-6 order-first order-lg-last col-lg-6 mb-7 offset-xl-1">
                    <div class="about-photo scene text-center text-lg-left" style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; position: relative; pointer-events: none;">
                        <div data-depth="0.2" style="transform: translate3d(11.4px, 12.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;">
                            <img src="assets/images/about/1.png" alt="photo">
                        </div>
                    </div>
                </div>
                <!-- about end -->
            </div>
        </div>
        <!-- about-shape satrt -->
        <img class="about-shape" src="assets/images/about/shape.png" alt="bg-shape">
        <!-- about-shape end -->
    </section>
</view>
<preview>
    <section class="about-us position-relative">
        <div class="container">
            <div class="row mb-n7">
                <!-- tile section start -->
                <div class="col-xl-5 col-lg-6 mb-7">
                    <div class="title-section">
                        <span class="sub-title">ABOUT US</span>
                        <h3 class="title">
                            Best Digital Agency
                            <br class="d-none d-xl-block">
                            in the Town
                        </h3>
                        </span>
                        <p class="mb-5">
                            Pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or
                            desires to obtain
                        </p>
                        <p class="high-light mb-8">
                            Pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there
                        </p>
                        <a href="about.html" class="btn btn-lg btn-dark btn-hover-dark">Learn more</a>
                    </div>
                </div>
                <!-- title section end -->
                <!-- about start -->
                <div class="col-xl-6 order-first order-lg-last col-lg-6 mb-7 offset-xl-1">
                    <div class="about-photo scene text-center text-lg-left" style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; position: relative; pointer-events: none;">
                        <div data-depth="0.2" style="transform: translate3d(11.4px, 12.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;">
                            <img src="assets/images/about/1.png" alt="photo">
                        </div>
                    </div>
                </div>
                <!-- about end -->
            </div>
        </div>
        <!-- about-shape satrt -->
        <img class="about-shape" src="assets/images/about/shape.png" alt="bg-shape">
        <!-- about-shape end -->
    </section>
</preview>