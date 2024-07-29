<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @help_topics/action.creating.html.twig */
class __TwigTemplate_1a319128aacb6eb8f3fefc18065bf559 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension(SandboxExtension::class);
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 7
        $context["actions_link_text"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 8
            yield "  ";
            yield t("Actions", array());
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 10
        $context["actions"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getRouteLink($this->sandbox->ensureToStringAllowed(($context["actions_link_text"] ?? null), 10, $this->source), "entity.action.collection"));
        // line 11
        $context["action_permissions_link_text"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 12
            yield "  ";
            yield t("Administer actions", array());
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 14
        $context["action_permissions"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getRouteLink($this->sandbox->ensureToStringAllowed(($context["action_permissions_link_text"] ?? null), 14, $this->source), "user.admin_permissions.module", ["modules" => "action"]));
        // line 15
        $context["action_overview"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getTopicLink("action.overview"));
        // line 16
        yield "<h2>";
        yield t("Goal", array());
        yield "</h2>
<p>";
        // line 17
        yield t("Create an advanced action. You can, for example, create an action to change the author of multiple content items. See @action_overview for more about actions.", array("@action_overview" => ($context["action_overview"] ?? null), ));
        yield "</p>
<h2>";
        // line 18
        yield t("Who can create actions?", array());
        yield "</h2>
<p>";
        // line 19
        yield t("Users with the <em>@action_permissions</em> permission (typically administrators) can create actions.", array("@action_permissions" => ($context["action_permissions"] ?? null), ));
        yield "</p>
<h2>";
        // line 20
        yield t("Steps", array());
        yield "</h2>
<ol>
  <li>";
        // line 22
        yield t("In the <em>Manage</em> administrative menu, navigate to <em>Configuration</em> &gt; <em>System</em> &gt; <em>@actions</em>. A list of all actions is shown.", array("@actions" => ($context["actions"] ?? null), ));
        yield "</li>
  <li>";
        // line 23
        yield t("Choose an advanced action from the dropdown and click <em>Create</em>.", array());
        yield "</li>
  <li>";
        // line 24
        yield t("Enter a name for the action in the <em>Label</em> field. This label will be visible for the user.", array());
        yield "</li>
  <li>";
        // line 25
        yield t("Configure any of the other available options. These will depend on the kind of action that you have chosen.", array());
        yield "</li>
  <li>";
        // line 26
        yield t("Click <em>Save</em>. You will be returned to the list of actions, with your new action added to the list.", array());
        yield "</li>
  <li>";
        // line 27
        yield t("To edit an action you have previously created, click <em>Configure</em> in the <em>Operations</em> drop-down list. To delete an action you have previously created, click <em>Delete</em> in the <em>Operations</em> drop-down list.", array());
        yield "</li>
</ol>";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "@help_topics/action.creating.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  102 => 27,  98 => 26,  94 => 25,  90 => 24,  86 => 23,  82 => 22,  77 => 20,  73 => 19,  69 => 18,  65 => 17,  60 => 16,  58 => 15,  56 => 14,  51 => 12,  49 => 11,  47 => 10,  42 => 8,  40 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "@help_topics/action.creating.html.twig", "C:\\xampp1\\htdocs\\appChallenge\\app-drupal\\web\\core\\modules\\action\\help_topics\\action.creating.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 7, "trans" => 8);
        static $filters = array("escape" => 17);
        static $functions = array("render_var" => 10, "help_route_link" => 10, "help_topic_link" => 15);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'trans'],
                ['escape'],
                ['render_var', 'help_route_link', 'help_topic_link'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
