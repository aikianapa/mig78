<html>
<view>
    <header>
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <div class="header-logo">
                        <a href="/" wb-if="'{{logo.0.img}}'==''">
                            <wb-var logo="name_{{_sess.lang}}" />
                            <wb-var logo="{{_sett.{{_var.logo}} }}" />
                            {{_var.logo}}
                        </a>
                        <a href="/" wb-if="'{{logo.0.img}}'!==''">
                            <img src="/thumbc/220x41/src/{{logo.0.img}}" width="220" height="41" alt="{{_sett.header}}"/>
                        </a>
                    </div>
                </div>
                <div class="col text-end">
                    <nav class="main-menu d-none d-lg-block">
                        <ul class="d-flex">
                            <wb-foreach wb-from="menu" wb-tpl="false">
                                <li><a href="{{link}}">{{button.{{_sess.lang}}}}</a></li>
                            </wb-foreach>
                            <li>
                                <a href="javascript:void(0)">{{_sess.lang}}</a>
                                <ul class="sub-menu d-flex">
                                    <wb-foreach wb-call="explode(',','{{_sett.locales}}')">
                                        <li class="sub-menu-item">
                                            <a class="sub-menu-link text-center"
                                                href="/module/lang/{{_val}}/set">{{_val}}</a>
                                        </li>
                                    </wb-foreach>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <button class="toggle" data-bs-toggle="modal" data-bs-target="#menuModal">
                        <span class="icon-top"></span>
                        <span class="icon-middle"></span>
                        <span class="icon-bottom"></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</view>
<edit header="Меню сайта">
    <div>
<div>
        <wb-module wb="module=yonger&mode=edit&block=common.inc" />
    </div>

        <div class="form-group row">
            <label class="col-lg-3">Логотип</label>
            <div class="col-lg-4">
                <wb-module wb="module=filepicker&mode=single&width=150&height=100" name="logo" />
            </div>
        </div>

        <wb-multiinput name="menu">
            <div class="col-lg-5 mb-2">
                <input name="button" class="form-control" placeholder="Заголовок" wb="module=langinp" required>
            </div>
            <div class="col-lg-7 mb-2">
                <input class="form-control" type="text" name="link" placeholder="{{_lang.link}}">
            </div>
        </wb-multiinput>

    </div>

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