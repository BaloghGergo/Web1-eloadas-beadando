<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "A szerver által küldött idő: {$time}\n\n";
flush();
?>