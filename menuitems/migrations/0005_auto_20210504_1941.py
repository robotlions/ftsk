# Generated by Django 3.2 on 2021-05-04 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menuitems', '0004_rename_title_menuitem_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuitem',
            name='vegan',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='menuitem',
            name='vegetarian',
            field=models.CharField(max_length=255, null=True),
        ),
    ]