# Generated by Django 5.0.4 on 2024-04-24 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0011_alter_product_fecha_entrada'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='FECHA_ENTRADA',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
