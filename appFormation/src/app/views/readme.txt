Dans le dossier views, on crée un module pour chaque ensemble de pages par fonctionnalités de l'application.

Exemple:
-  pour les pages concernant les Orders, on créé un module orders avec l'option --routing=true
-  pour les pages concernant les Clients, on créé un module clients avec l'option --routing=true
-  etc...

Dans chacun de ces modules de pages, on créé un sous-dossier pages, avec dedans un component pour chaque page.

Dans chacun de ces modules de pages, dans le fichier routing correspondant, on rajoute les routes propres à chacune de ces pages du module concerné
