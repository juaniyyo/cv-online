<?php
$file = 'visitas.json';
$ip = $_SERVER['REMOTE_ADDR'];

if (!file_exists($file)) {
    $data = ['visitas' => 1, 'ip' => $_SERVER['REMOTE_ADDR']];
    file_put_contents($file, json_encode($data));
} else {
    $data = json_decode(file_get_contents($file), true);
}

if ($data['ip'] == $_SERVER['REMOTE_ADDR']) {
    echo $data['visitas'];
    return;
}
$data['visitas']++;
file_put_contents($file, json_encode($data));

echo $data['visitas'];