# Generated by Django 5.0.2 on 2024-02-14 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('superadmin', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(1, 'superadmin'), (2, 'admin'), (3, 'user')], default=1, null=True),
        ),
    ]