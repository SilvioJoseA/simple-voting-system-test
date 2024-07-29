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

/* @help_topics/action.overview.html.twig */
class __TwigTemplate_6b155f73913a34c3088fe14fb41cb778 extends Template
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
        // line 8
        $context["actions_link_text"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 9
            yield "  ";
            yield t("Actions administration page", array());
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 11
        $context["actions_page"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getRouteLink($this->sandbox->ensureToStringAllowed(($context["actions_link_text"] ?? null), 11, $this->source), "entity.action.collection"));
        // line 12
        yield "<h2>";
        yield t("What are actions?", array());
        yield "</h2>
<p>";
        // line 13
        yield t("Actions are module-defined tasks that can be executed on the site; for example, unpublishing content, sending an email message, or blocking a user.", array());
        yield "</p>
<h2>";
        // line 14
        yield t("What are simple actions?", array());
        yield "</h2>
<p>";
        // line 15
        yield t("Simple actions do not require configuration. They are automatically available to be executed, and are always listed as available on the @actions_page.", array("@actions_page" => ($context["actions_page"] ?? null), ));
        yield "</p>
<h2>";
        // line 16
        yield t("What are advanced actions?", array());
        yield "</h2>
<p>";
        // line 17
        yield t("Advanced actions require configuration. Before they are available for listing and execution, they need to be created and configured. For example, for an action that sends email, you would need to configure the email address.", array());
        yield "</p>
<h2>";
        // line 18
        yield t("How are actions executed?", array());
        yield "</h2>
<p>";
        // line 19
        yield t("In the core software, actions can be executed through a <em>bulk operations form</em> added to a view; if you have the core Views module installed, see the related topic \"Managing content listings (views)\" for more information about views and bulk operations.", array());
        yield "</p>
<h2>";
        // line 20
        yield t("Configuring actions overview", array());
        yield "</h2>
<p>";
        // line 21
        yield t("The Actions UI module provides a user interface for listing and configuring actions. The core Views UI module provides a user interface for creating views, which may include bulk operations forms for executing actions. See the related topics listed below for specific tasks.", array());
        yield "</p>
<h2>";
        // line 22
        yield t("Additional resources", array());
        yield "</h2>
<ul>
  <li><a href=\"https://www.drupal.org/documentation/modules/action\">";
        // line 24
        yield t("Online documentation for the Actions UI module", array());
        yield "</a></li>
</ul>";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "@help_topics/action.overview.html.twig";
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
        return array (  95 => 24,  90 => 22,  86 => 21,  82 => 20,  78 => 19,  74 => 18,  70 => 17,  66 => 16,  62 => 15,  58 => 14,  54 => 13,  49 => 12,  47 => 11,  42 => 9,  40 => 8,);
    }

    public function getSourceContext()
    {
        return new Source("", "@help_topics/action.overview.html.twig", "C:\\xampp1\\htdocs\\appChallenge\\app-drupal\\web\\core\\modules\\action\\help_topics\\action.overview.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 8, "trans" => 9);
        static $filters = array("escape" => 15);
        static $functions = array("render_var" => 11, "help_route_link" => 11);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'trans'],
                ['escape'],
                ['render_var', 'help_route_link'],
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
