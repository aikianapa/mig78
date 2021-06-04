<html>
<view>
<header>
<div class="container">
            <div class="row align-items-center">
                <!-- Header Logo Start -->
                <div class="col">
                    <div class="header-logo">
                        <a href="/">
                            <img src="assets/images/logo/logo.png" alt="{{_sett.header}}" wb-if="'{{logo.0.img}}'==''" />
                            <img src="/thumbc/220x41/src/{{logo.0.img}}" width="220" height="41" alt="{{_sett.header}}" wb-if="'{{logo.0.img}}'!==''" />
                        </a>
                    </div>
                </div>
                <!-- Header Logo End -->

                <!-- Header Menu Start -->
                <div class="col text-end">
                    <nav class="main-menu d-none d-lg-block">
                        <ul class="d-flex">
                            <wb-foreach wb-from="menu">
                                <li><a href="{{link}}">{{button}}</a></li>
                            </wb-foreach>
                        </ul>
                    </nav>
                    <button class="toggle" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span class="icon-top"></span>
                        <span class="icon-middle"></span>
                        <span class="icon-bottom"></span>
                    </button>
                </div>
                <!-- Header Menu End -->
            </div>
        </div>
</header>
</view>
<edit header="Меню сайта">
<div>
    <wb-include wb-src="/modules/yonger/common/blocks/common.inc.php" />

    <div class="form-group row">
        <label class="col-lg-3">Логотип</label>
        <div class="col-lg-4">
            <wb-module wb="module=filepicker&mode=single&width=150&height=100" name="logo" />
        </div>
    </div>
</div>
<wb-multilang wb-lang="{{_sett.locales}}" name="lang">
            <wb-multiinput name="menu">
                <div class="col-lg-5 mb-2">
                <input class="form-control" type="text" name="button" placeholder="{{_lang.button}}">
                </div>
                <div class="col-lg-7 mb-2">
                <input class="form-control" type="text" name="link" placeholder="{{_lang.link}}">
                </div>
            </wb-multiinput>
</wb-multilang>
<wb-lang>
        [ru]
        link = Ссылка
        button = Кнопка
        [en]
        link = Link
        button = Button
    </wb-lang>
</edit>
</html>