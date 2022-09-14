<?php

class modTgbot
{
    private $app;
    private $token;
    private $data;

    public function __construct($app)
    {

        set_time_limit(600);
        $this->token = '5765073141:AAEXBIlLH4DoCybH14O3MkshqBjRCA7MUcA';
        $this->app = &$app;

        $data = file_get_contents('php://input');

        $data = $app->Dot(json_decode($data, true));

        if (empty($data->vars('message.chat.id'))) {
            exit();
        }

        $this->init();
    }

    function init()
    {
        $app = &$this->app;
    }
    function send($method, $response)
    {
        $ch = curl_init('https://api.telegram.org/bot' . $this->token . '/' . $method);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $response);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $res = curl_exec($ch);
        curl_close($ch);

        return $res;
    }
}
