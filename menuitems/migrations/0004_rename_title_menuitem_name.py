# Generated by Django 3.2 on 2021-05-04 18:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menuitems', '0003_rename_name_menuitem_title'),
    ]

    operations = [
        migrations.RenameField(
            model_name='menuitem',
            old_name='title',
            new_name='name',
        ),
    ]
